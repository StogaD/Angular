import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const planes = [
      { id: 11, name: 'A380', Stype:"A380", SModel: "Airbus"},
      { id: 12, name: 'Narco',Stype:"A320", SModel: "Airbus"}, 
      { id: 13, name: 'Bombasto',Stype:"A340", SModel: "Airbus"}, 
      { id: 14, name: 'Celeritas',Stype:"A360", SModel: "Airbus"}, 
      { id: 15, name: 'Magneta' ,SModel:"Boeing", Stype: "747"}, 
      { id: 16, name: 'RubberMan' ,SModel:"Boeing", Stype: "737"}, 
      { id: 17, name: 'Dynama' ,SModel:"Boeing", Stype: "777"}, 
      { id: 18, name: 'Dr IQ',SModel:"Boeing", Stype: "787"}, 
      { id: 19, name: 'Magma' ,SModel:"Bombardier", Stype: "41 CRJ"}, 
      { id: 20, name: 'Tornado',SModel:"Bombardier", Stype: "17 CS"}, 
    ];
    return {planes};
  }
}
