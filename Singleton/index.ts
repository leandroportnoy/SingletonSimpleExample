export class Singleton {
    private static instance: Singleton;
    
    constructor() {}

    //new instance if is null
    public static getInstance(): Singleton {
        if (!Singleton.instance==null) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance;
    }
}