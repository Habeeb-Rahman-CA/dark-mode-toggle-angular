import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkMode: boolean = false

  modeName = signal('Dark Mode')
  modeBtn = signal('Light')

  constructor() {
    const savedTheme = localStorage.getItem('isDarkMode')
    this.isDarkMode = savedTheme === 'true'
    this.updateBodyClass()
   }

   toggletheme(){
    this.isDarkMode = !this.isDarkMode
    if(this.isDarkMode){
      this.modeName.set('Dark Mode')
      this.modeBtn.set('Light')
    } else {
      this.modeName.set('Light Mode')
      this.modeBtn.set('Dark')
    }
    localStorage.setItem('isDarkMode', this.isDarkMode.toString())
    this.updateBodyClass()
   }

   updateBodyClass(){
    document.body.classList.toggle('darktheme', this.isDarkMode)
   }
}
