import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  // @Output() messageEvent = new EventEmitter<{ message: string }>();
  username: string | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let uname = '';

    this.route.queryParams.subscribe(params => {
      this.username = params['username'];

    });

    if (this.username == 'admin') {
      uname = 'Admin';
    } else {
      uname = 'User';
    }


    const messages = document.querySelector('#messages') as HTMLElement;
    const messageBox = document.querySelector('#messageBox') as HTMLInputElement;
    let ws: WebSocket | null;


    const showMessage = (data: any) => {
      let message: string = 'unknown message';
      let sender: string = 'unknown';

      if (typeof data === 'string') {
        const parsedData = JSON.parse(data);

        sender = parsedData.sender;
        message = parsedData.message;

      } else {
        const reader = new FileReader();
        reader.onload = () => {
          const parsedData = JSON.parse(reader.result as string);

          sender = parsedData.sender;
          message = parsedData.message;

        };
        reader.readAsText(data);
      }

      messages.innerHTML += `\n<span class="chattxt" style="font-family: 'Poppins', sans-serif;
      font-size: 14px;
      width: 100%;
      margin-left: 12px;
      padding: 10px;
      border-radius: 15px;
      color: #ffffff;
      background: linear-gradient(to bottom, #02c4e1, #1397f8);
      overflow-x: hidden;"> <span class="uname" style="font-family: 'Poppins', sans-serif;">${sender}</span><span style="margin-right: 8px;">:</span> ${message}</span>\n`;
      messages.scrollTop = messages.scrollHeight;
      messageBox.value = '';

      /*messages.innerHTML += `\n<span class="chattxt" style="font-family: 'Poppins', sans-serif;
              font-size: 14px;
              max-width: 70%; /!* Adjust the maximum width of the chat bubble *!/
              padding: 10px;
              border-radius: 15px; /!* Create curved shape with border-radius *!/
              background: linear-gradient(to bottom, #02c4e1, #1397f8);
              color: #ffffff;
              margin-bottom: 20px; /!* Adjust spacing between chat bubbles *!/
              margin-top: 10px;
              overflow-x: auto;
              position: relative;"> <span class="uname" style="font-family: 'Poppins', sans-serif;">${sender}</span><span style="margin-right: 8px;">:</span> ${message}</span>\n`;
      messages.scrollTop = messages.scrollHeight;
      messageBox.value = '';*/
    }

    function init() {
      if (ws) {
        ws.onerror = ws.onopen = ws.onclose = null;
        ws.close();
      }

      ws = new WebSocket('ws://localhost:8000');
      ws.onopen = () => {
        console.log('Connection opened!');
      }
      ws.onmessage = ({data}) => {
        if (typeof data === 'string') {
          showMessage(data);
        } else if (data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = () => showMessage(reader.result as string);
          reader.readAsText(data);
        }
      };

      ws.onclose = function () {
        ws = null;
      }
    }

    messageBox.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && ws) {
        const messageObject = {
          sender: uname!,
          message: messageBox.value
        };
        ws.send(JSON.stringify(messageObject));
        // this.messageEvent.emit(messageObject);
        showMessage(JSON.stringify(messageObject));
      }
    });

    init();

  }

}
