import { IConfiguration } from 'lego-boost-browser/dist/hub/hubAsync';

export interface IControlData {
  speed: number;
  turnAngle: number;
  input: any;
  forceState: boolean;
  updateInputMode: any;
}

export interface IDeviceInfo {
  connected: boolean;
  distance: number;
  color: string;
  error: string;
  rssi: number;
  tilt: { roll: number; pitch: number };
  ports: {
    A: { action: string; angle: number };
    B: { action: string; angle: number };
    AB: { action: string; angle: number };
    C: { action: string; angle: number };
    D: { action: string; angle: number };
    LED: { action: string; angle: number };
  };
}

export interface IBoostConfig extends IConfiguration {
  driveFinetune?: number;
  turnFinetune?: number;
}

export enum ControlMode {
  Click,
  Arcade,
}

export interface IStoredApplicationState {
  infosVisible: boolean;
  boostInfosVisible: boolean;
  extraControlsVisible: boolean;
  code: string;
  controlMode: ControlMode;
}