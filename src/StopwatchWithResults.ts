import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {

  private results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  private prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = <HTMLDivElement> element.querySelector('.stopwatch__results__list');
    this.dom.addToListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__add-to-list-btn');
    this.dom.resetListBtn = <HTMLButtonElement> element.querySelector('.stopwatch__reset-list-btn');
  }

  private prepareActions(): void {
    this.dom.addToListBtn.addEventListener('click', () => this.addToList());
    this.dom.resetListBtn.addEventListener('click', () => this.resetList());
  }

  private renderList(): void {
    this.dom.resultsList.innerHTML = '';

    this.results.map(result => (
      this.dom.resultsList.insertAdjacentHTML('beforeend', `<li>${result}</li>`)
    ));
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
