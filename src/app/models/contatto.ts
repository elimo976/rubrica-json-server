export class Contatto {
    id?: string;
    tipologia?: string;
    nome?: string;
    cognome?: string;
    ragioneSociale?: string;
    indirizzo?: {
        viaECivico?: string;
        citta?: string;
        provincia?: string;
        cap?: string;
        nazione?: string;
    };
    email?: string;
    telefono?: {
        prefissoInternazionale?: string;
        numero?: string;
    };
    dataNascita?: string;
}