import { Component, Input} from "@angular/core";

@Component({
  selector: "app-funcionario-card",
  templateUrl: "./funcionario-card.component.html",
  // styleUrls: ['./funcionario-card.component.css']
  styles: [
    `
      .card-block {
        text-transform: uppercase;
        color: blue;
      }
    `
  ]
})
export class FuncionarioCardComponent {
  // exportar
  @Input() funcionario: any;

  // getClasseCss() {
  //  return ['badge', 'badge-secondary'];
 // }

 isAdmin(){
   return this.funcionario.nome.startsWith('T');
 }


getEstilosCartao() {
  return {
    //'border-width': this.funcionario.id + 'px',
    backgroundColor: this.funcionario.id % 2 === 0
        ? 'lightblue' : 'lightgreen'

  };
}


}
