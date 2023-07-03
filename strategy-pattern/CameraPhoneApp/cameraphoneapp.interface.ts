export interface ShareBehaviour {
  share(): void;
}

export class Text implements ShareBehaviour {
  public share(): void {
    console.log('Share photo via text');
  }
}

export class Email implements ShareBehaviour {
  public share(): void {
    console.log('Share photo via email');
  }
}

export class SocialMedia implements ShareBehaviour {
  public share(): void {
    console.log('Share photo via social media');
  }
}
