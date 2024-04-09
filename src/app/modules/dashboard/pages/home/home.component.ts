import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, MatRadioModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  colorPallet: string[] = ['primary', 'secondary', 'tertiary', 'accent', 'warn']
  Data: any = {
    statistics: [
      {
        "title": "Current MRR",
        "value": "$12.4k"
      },
      {
        "title": "Current Customers",
        "value": 16601
      },
      {
        "title": "Active Customers",
        "value": "33%"
      },
      {
        "title": "Churn Rate",
        "value": "2%"
      }
    ],
  }



}
