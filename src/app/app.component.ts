import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  title = 'count-down timer app';

  timer="";

  ngOnInit() {
    let countdown = 10;
    this.timer = countdown.toString();
    var refreshId= setInterval(() => {
          countdown = --countdown;
          if (countdown === 0) {
            clearInterval(refreshId);
          }
          this.timer = countdown.toString();
  }, 1000);

}


}
