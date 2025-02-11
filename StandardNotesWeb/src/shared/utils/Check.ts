type stateType = {
  text: string;
  number: number | null;
};

type statesType = {
  empty: stateType;
  notEmail: stateType;
  min: stateType;
  max: stateType;
};

type messagesType = {
  empty?: string;
  notEmail?: string;
  min?: string;
  max?: string;
};

class Check {
  private _index = 0;
  private value = "";
  private state: statesType = {
    empty: { text: "", number: null },
    notEmail: { text: "", number: null },
    min: { text: "", number: null },
    max: { text: "", number: null },
  };

  constructor(value: string = "", messages: messagesType = {}) {
    this.value = value;
    this.state.empty.text = messages.empty ?? "Укажите значение";
    this.state.notEmail.text = messages.notEmail ?? "Проверьте адрес электронной почты";
    this.state.min.text = messages.min ?? "Значение слишком короткое";
    this.state.max.text = messages.max ?? "Значение слишком длинное";
  }

  private get index() {
    this._index++;
    return this._index;
  }

  private reset() {
    this._index = 0;
    this.state.empty.number = null;
    this.state.notEmail.number = null;
    this.state.min.number = null;
    this.state.max.number = null;
  }

  isEmpty(): Check {
    if (!this.value) this.state.empty.number = this.index;
    return this;
  }

  isNotEmail(): Check {
    const regex = /^[^@]+@[^@]+\.[^@]+$/;
    const matches = regex.exec(this.value);
    if (!matches) this.state.notEmail.number = this.index;
    return this;
  }

  isMin(minLength: number = 0): Check {
    if (this.value.length < minLength) this.state.min.number = this.index;
    return this;
  }

  isMax(maxLength: number = 0): Check {
    if (this.value.length > maxLength) this.state.max.number = this.index;
    return this;
  }

  result(): string[] {
    const list = Object.values(this.state)
      .filter(({ number }) => number !== null)
      .sort(function (a, b) {
        if ((a?.number ?? 0) > (b?.number ?? 0)) return 1;
        if ((a?.number ?? 0) < (b?.number ?? 0)) return -1;
        return 0;
      })
      .map(({ text }) => text);
    this.reset();
    return list;
  }

  resultFirst(): string {
    return this.result()[0] ?? "";
  }

  resultBool(): boolean {
    return this.result().length > 0;
  }
}

export default Check;
