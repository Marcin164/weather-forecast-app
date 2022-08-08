export const DBConfig = {
    name: 'Weather',
    version: 1,
    objectStoresMeta: [
      {
        store: 'weather',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'date', keypath: 'date', options: { unique: false } },
          { name: 'city', keypath: 'city', options: { unique: false } },
          { name: 'data', keypath: 'data', options: { unique: false } },
          { name: 'airQuality', keypath: 'airQuality', options: { unique: false } },
          { name: 'airQualityStatus', keypath: 'airQualityStatus', options: { unique: false } },
          { name: 'events', keypath: 'events', options: { unique: false } },
          { name: 'moonRise', keypath: 'moonRise', options: { unique: false } },
          { name: 'sunRise', keypath: 'sunRise', options: { unique: false } },
        ]
      }
    ]
  };