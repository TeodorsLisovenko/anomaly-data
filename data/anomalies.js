const smallBatch = {
  results: [
    {
      timestamp: "15/08/2019",
      ranking: [
        {
          feature: "castanea_sativa",
          coordinates: {
            x: "16.882000",
            y: "41.110092",
          },
          value: 41.0,
          importance: 0.38,
          anomaly_level: 1.0,
        },
        {
          feature: "fagaceae",
          coordinates: {
            x: "16.870182752609256",
            y: "41.130298178046246",
          },
          value: 41.0,
          importance: 0.26,
          anomaly_level: 1.0,
        },
        {
          feature: "humidex",
          coordinates: {
            x: "16.861910820007328",
            y: "41.12839100426432",
          },
          value: 37.09,
          importance: 0.22,
          anomaly_level: 0.25,
        },
      ],
      anomaly: "true",
    },
    {
      timestamp: "16/08/2019",
      ranking: [
        {
          feature: "humidex",
          coordinates: {
            x: "16.861910820007328",
            y: "41.12546548589852",
          },
          value: 28.49,
          importance: 0.4,
          anomaly_level: 0.0,
        },
        {
          feature: "castanea_sativa",
          coordinates: {
            x: "16.891865730285648",
            y: "41.118175367211755",
          },
          value: 6.0,
          importance: 0.03,
          anomaly_level: 0.33,
        },
        {
          feature: "fagaceae",
          coordinates: {
            x: "16.912851333618168",
            y: "41.11360044465409",
          },
          value: 6.0,
          importance: 0.01,
          anomaly_level: 0.33,
        },
      ],
      anomaly: "false",
    },
    {
      timestamp: "17/08/2019",
      ranking: [
        {
          feature: "humidex",
          coordinates: {
            x: "16.91130638122559",
            y: "41.104514317467775",
          },
          value: 7.93,
          importance: 0.7,
          anomaly_level: 0.0,
        },
        {
          feature: "fagaceae",
          coordinates: {
            x: "16.857984066009525",
            y: "41.10621199902214",
          },
          value: 0.0,
          importance: 0.02,
          anomaly_level: 0.0,
        },
        {
          feature: "castanea_sativa",
          coordinates: {
            x: "16.85534477233887",
            y: "41.109914409405604",
          },
          value: 0.0,
          importance: 0.01,
          anomaly_level: 0.0,
        },
      ],
      anomaly: "false",
    },
    {
      timestamp: "18/08/2019",
      ranking: [
        {
          feature: "fagaceae",
          coordinates: {
            x: "16.862983703613285",
            y: "41.11221012233372",
          },
          value: 12.0,
          importance: 0.01,
          anomaly_level: 0.33,
        },
        {
          feature: "humidex",
          coordinates: {
            x: "16.867704391479496",
            y: "41.11741559649901",
          },
          value: 15.2,
          importance: 0.01,
          anomaly_level: 0.0,
        },
        {
          feature: "castanea_sativa",
          coordinates: {
            x: "16.854765415191654",
            y: "41.12614434708564",
          },
          value: 0.0,
          importance: 0.0,
          anomaly_level: 0.0,
        },
      ],
      anomaly: "true",
    },
    {
      timestamp: "19/08/2019",
      ranking: [
        {
          feature: "humidex",
          coordinates: {
            x: "16.849508285522464",
            y: "41.13173660295269",
          },
          value: 25.7,
          importance: 0.56,
          anomaly_level: 0.0,
        },
        {
          feature: "fagaceae",
          coordinates: {
            x: "16.83963775634766",
            y: "41.132835602976556",
          },
          value: 0.0,
          importance: 0.04,
          anomaly_level: 0.0,
        },
        {
          feature: "castanea_sativa",
          coordinates: {
            x: "16.861996650695804",
            y: "41.091998624969456",
          },
          value: 0.0,
          importance: 0.02,
          anomaly_level: 0.0,
        },
      ],
      anomaly: "false",
    },
    {
      timestamp: "20/08/2020",
      ranking: [
        {
          feature: "humidex",
          coordinates: {
            x: "16.883754730224613",
            y: "41.095135857126294",
          },
          value: 4.83,
          importance: 0.31,
          anomaly_level: 0.0,
        },
        {
          feature: "fagaceae",
          coordinates: {
            x: "16.887917518615726",
            y: "41.10548442658741",
          },
          value: 0.0,
          importance: 0.01,
          anomaly_level: 0.0,
        },
        {
          feature: "castanea_sativa",
          coordinates: {
            x: "16.897230148315433",
            y: "41.10826532663548",
          },
          value: 0.0,
          importance: 0.0,
          anomaly_level: 0.0,
        },
      ],
      anomaly: "false",
    },
  ],
};

module.exports = { smallBatch }