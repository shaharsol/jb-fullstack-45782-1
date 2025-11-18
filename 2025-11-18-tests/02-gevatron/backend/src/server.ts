import app, { start } from "./app";
import config from 'config'


(async() => {
    const port = config.get<number>('app.port')
    const appName = config.get<string>('app.name')
    await start()
    app.listen(port, () => console.log(`${appName} started on port ${port}`))
})();