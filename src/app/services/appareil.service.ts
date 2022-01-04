export class AppareilService {
  appareils = [
    { name: 'pc', status: 'allumé' },
    { name: 'mal', status: 'éteint' },
    { name: 'tv', status: 'allumé' },
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  onAllumeOne(index: number) {
    this.appareils[index].status = 'allumé';
  }
  onEteindreOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
