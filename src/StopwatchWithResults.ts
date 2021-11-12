import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {

  private results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element)
    this.prepareElements(element)
    this.prepareActions()
  }

  private prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = <HTMLDivElement> element.querySelector('.stopwatch__results');
    this.dom.addToListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__add-to-list-btn');
    this.dom.resetListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__reset-list-btn');
  }

  private prepareActions(): void {
    this.dom.addToListBtn.addEventListener('click', () => this.addToList());
    this.dom.resetListBtn.addEventListener('click', () => this.resetList());
  }

  private renderList(): void {
    /*
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li
    na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian.

    np. <li>00:12:00</li>
    */

    this.dom.resultsList.innerHTML = '';
    //this.dom.resultsList.innerHTML = `<li>${this.results[this.results.length - 1]}</li>`;


    /*for(let i = 0; i < this.results.length; i++) {
      this.dom.resultsList.innerHTML = `<li>${this.results[this.results.length - 1]}</li>`;
    }*/

    /*this.results.map(result => (
      this.dom.resultsList.innerHTML = `<li>${result}</li>`
    ));*/

    console.log(this.results);
  }

  private addToList(): void {
    this.results.push(this.formatTime(this.currentTime));
    this.renderList();
  }

  private resetList(): void {
    this.results = [];
    this.dom.resultsList.innerHTML = '';
  }

}

export default StopwatchWithResults;
