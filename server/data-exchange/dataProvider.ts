import * as fs from 'fs'

export class DataProvider {

    constructor() { }

    public async getDocument(): Promise<string> {
        return new Promise<string>((res, rej) => {
            fs.readFile('data.json', "utf8", function (err, data) {
                if (data == null) {
                    res(err.message)
                }
                res(data.toString())
            })
        })
    }
}