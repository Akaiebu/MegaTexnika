export interface Ilinks {
    id: number;
    to: string;
    title: string;
}
export interface Imedia {
    id: number;
    to: string;
    icon: any;
}
export interface Iadress {
    id: number;
    to: string;
    title: string;
}
export interface Iheadlinks {
    id: number;
    to: string;
    title: string;
}
export interface Iimages {
    id: number;
    to: string;
    title: string;
    source: string;
}
export interface Idescription {
    id: number;
    title: string;
    il: number;
    qiymet_ay: number;
    qiymet_gun: number;
    mezenne: string;
    source: string;
}
export interface Iyenilik {
    id: number;
    basliq: string;
    info: string;
    tarix: string;
    source: string;
}
export interface Idescriptions {
    id: number;
    title: string;
    il: number;
    qiymet_ay: number;
    qiymet_gun: number;
    mezenne: string;
    source: string;
}
export interface Ixeberler {
    id: number;
    to: any;
    basliq: string;
    tarix: string;
    source: string;
}
export interface Ixeber {
    id: number;
    to: string;
    basliq: string;
    tarix: string;
    melumat: string;
    source: string;
}