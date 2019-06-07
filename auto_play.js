class AutoPlay {
  constructor(audioFile){
    this.withSound    = false;
    this.withOutSound = false;
    this.audioFile = audioFile;
  }

  test(audioFile){
    const audio =  new Audio(audioFile);
    this.p1 = audio.play().then( () => this.withSound=true)
      .catch( ()=>{
        audio.muted=true;
        this.p2 = audio.play().then( () => this.withOutSound=true)
        .catch( ()=>this.withOutSound)  // unnecessary
      })
  }

  async async_allowed(){
    await this.p1
    await this.p2
    return this.allowed()
  }

  allowed(){return this.withSound || this.withOutSound}

}
