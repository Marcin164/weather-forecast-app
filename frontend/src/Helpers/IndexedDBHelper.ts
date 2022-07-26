class IndexedDBHelper{
    version: any
    name: any
    constructor(name:any, version:any = 1) {
        this.name = name
        this.version = version
    }

    checkBrowserSupport(){
        
    }

    openConnection(){
        const result = indexedDB.open(this.name, this.version)
        result.onsuccess = (event) => {
            return result
        }

        result.onerror = (event) => {
            
        }

        result.onupgradeneeded = (event) => {

        }

        result.onblocked = () => {

        }
    }

    closeConnection(){

    }

    save(){

    }

    delete(){

    }

    update(){

    }

    fetch(){

    }
}

export default IndexedDBHelper