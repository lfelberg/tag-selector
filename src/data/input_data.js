const inputData = {
  downloads: [{
    size: 100, time: 10,
    tags: [
      { name: 'city', value: 'Bangalore' },
      { name: 'carrier', value: 'Airtel' },
    ]
  }, {
    size: 20, time: 25,
    tags: [
      { name: 'city', value: 'Bangalore' },
      { name: 'carrier', value: 'Vodafone' },
    ]
  }, {
    size: 10, time: 30,
    tags: [
      { name: 'city', value: 'Rio de Janeiro' },
      { name: 'carrier', value: 'Vodafone' },
    ]
  }, {
    size: 200, time: 9,
    tags: [
      { name: 'city', value: 'Bangalore' },
      { name: 'carrier', value: 'Verizon' },
    ]
  }, {
    size: 250, time: 55,
    tags: [
      { name: 'city', value: 'Jakarta' },
      { name: 'carrier', value: 'Vodafone' },
    ]
  }, {
    size: 78, time: 55,
    tags: [
      { name: 'city', value: 'Bucharest' },
      { name: 'carrier', value: 'Vodafone' },
    ]
  }, {
    size: 33, time: 18,
    tags: [
      { name: 'city', value: 'Bucharest' },
      { name: 'carrier', value: 'AT&T' },
    ]
  }, {
    size: 422, time: 55.4,
    tags: [
      { name: 'city', value: 'San Francisco' },
      { name: 'carrier', value: 'AT&T' },
    ]
  }, {
    size: 89, time: 21.1,
    tags: [
      { name: 'city', value: 'Bangalore' },
      { name: 'carrier', value: 'Verizon' },
    ]
  }],
  selections: [
    [
      { name: 'city', value: 'Bangalore'},
      { name: 'carrier', value: 'Vodafone' }
    ], [
      { name: 'carrier', value: 'AT&T' }
    ]
  ]
};

export default inputData;
