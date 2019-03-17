import { Component, OnInit, NgZone } from "@angular/core";

@Component({
  selector: "app-questionnaire",
  templateUrl: "./questionnaire.component.html",
  styleUrls: ["./questionnaire.component.css"]
})
export class QuestionnaireComponent implements OnInit {
  codeLanguage;
  username;
  result;
  timer;
  constructor(private ngZone: NgZone) {
    this.timer = 59;
  }

  ngOnInit() {
    // 脫離 ngZone
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        // 再加回 ngZone 不然畫面不會被通知變更
        // 假設原本就這樣寫 就不會讓 angular 一直有 change 的監聽
        this.ngZone.run(()=>{
          if (this.timer === 0) {
            this.timer = 59;
          } else {
            this.timer--;
          }
        });
      }, 1000);
    });
  }

  submit() {
    this.result = "送出成功";
  }
}
