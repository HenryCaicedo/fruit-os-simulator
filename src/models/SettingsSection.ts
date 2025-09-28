export interface SettingsLabel {
    label: string;
    route: string;
    isSwitch?: boolean;
}

export interface SettingsSection extends Array<SettingsLabel> {}
