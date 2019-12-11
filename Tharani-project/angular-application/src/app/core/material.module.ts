import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule
} from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatSnackBarModule,
    ],
    exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatSnackBarModule,
    ],
})
export class CustomMaterialModule { }