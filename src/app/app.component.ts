import { Component,ChangeDetectionStrategy, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutUsModalComponent } from './modals/about-us-modal/about-us-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'carurg';

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AboutUsModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
