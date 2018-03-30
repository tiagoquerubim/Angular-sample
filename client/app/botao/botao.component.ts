import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {

    @Input() nome: string = 'Ok';
    @Input() confirmacao: boolean = false;
    @Input() mensagem: string = 'Confirma?';
    @Input() estilo: string = 'btn-default';
    @Input() tipo: string = 'button';
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();

    executaAcao() {

        if (this.confirmacao) {
            if (confirm('Tem certeza?')) {
                this.acao.emit(null);
            }
            return;
        }
        this.acao.emit(null);
    }

}