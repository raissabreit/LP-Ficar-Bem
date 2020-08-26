export default class Countdown {
    constructor(dataLive){
        this.dataLive = dataLive;
    }
    get _diaAtual(){
        return new Date();
    }
    get _dataLive(){
        return new Date(this.dataLive);
    }
    get _diferenca() {
        return this._dataLive.getTime() - this._diaAtual.getTime();
    }
    get day(){
        return Math.floor(this._diferenca / (24 * 60 * 60 * 1000));
    }
    get horas() {
        return Math.floor(this._diferenca / (60 * 60 * 1000));
    }
    get minutos() {
        return Math.floor(this._diferenca / (60 * 1000));
    }
    get segundos() {
        return Math.floor(this._diferenca / 1000);
    }

    get total() {
        const dia = this.day < 10 ? '0' + this.day : this.day;
        const hora = this.horas % 24  < 10 ? '0' + (this.horas % 24) : (this.horas % 24);
        const minuto = this.minutos % 60  < 10 ? '0' + (this.minutos % 60) : (this.minutos % 60);
        const segundo = this.segundos % 60  < 10 ? '0' + (this.segundos % 60) : (this.segundos % 60);
        return [dia, hora, minuto, segundo]
    }
}