import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-avatar',
  templateUrl: './text-avatar.component.html',
  styleUrls: ['./text-avatar.component.scss'],
})
export class TextAvatarComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Input() textColor: string;

  public firstLetter = '';
  public styles = {
    'background-color': '#fff',
    color: '#000'
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    let text = changes['text'] ? changes['text'].currentValue : null;
    let color = changes['color'] ? changes['color'].currentValue : null;
    let textColor = changes['textColor'] ? changes['textColor'].currentValue : this.styles.color;

    this.firstLetter = this.extractFirstCharacter(text);

    this.styles = {...this.styles, 'background-color': this.backgroundColorHexString(color, text), color: textColor};
  }

  private extractFirstCharacter(text: string): string {
    return text.charAt(0) || '';
  }

  private backgroundColorHexString(color: string, text: string): string {
    return color || this.getColor(text);
  }

  ngOnInit() {}

  COLORS: any[] = ['#e57373', '#f06292', '#ba68c8', '#9575cd', '#7986cb', '#64b5f6',
    '#4fc3f7', '#4dd0e1', '#4db6ac', '#81c784', '#aed581', '#ff8a65', '#d4e157', '#673ab7',
    '#ffb74d', '#a1887f', '#90a4ae'];

  public getColor(str: string): string {
    return this.COLORS[Math.abs(this.toNumber(str)) % this.COLORS.length];
  }

  private toNumber(str: string): number {
    let h = 0;

    for (let i = 0; i < str.length; i++) {
      h = 31 * h + str.charCodeAt(i);
      h |= 0; // Convert to 32bit integer
    }

    return h;
  }

}
