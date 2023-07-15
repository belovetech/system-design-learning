export abstract class Pizza {
  description: string = 'Unknonwn Pizza';

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

export class ThinCrushPizza extends Pizza {
  constructor() {
    super();
    this.description = 'Thin Crush Pizza';
  }

  public cost(): number {
    return 4.5;
  }
}

export class ThickCrushPizza extends Pizza {
  constructor() {
    super();
    this.description = 'Thick Crush pizza';
  }

  public cost(): number {
    return 7.3;
  }
}
