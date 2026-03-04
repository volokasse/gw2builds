export type WeaponHand = 'main' | 'off'

export type WeaponSlot = {
  stat?: number
  sigils: (number | undefined)[]
}

export type WeaponSwapDTO = {
    main: WeaponSlot,
    off: WeaponSlot
};

export class WeaponSwap {
  public slots: Record<WeaponHand, WeaponSlot>

  constructor(sigilCount = 2) {
    this.slots = {
      main: { stat: undefined, sigils: Array(sigilCount).fill(undefined) },
      off:  { stat: undefined, sigils: Array(sigilCount).fill(undefined) }
    }
  }

  public toJSON(): WeaponSwapDTO {
    return {
      main: { stat: this.slots.main.stat, sigils: [...this.slots.main.sigils] },
      off:  { stat: this.slots.off.stat,  sigils: [...this.slots.off.sigils]  }
    }
  }
}
