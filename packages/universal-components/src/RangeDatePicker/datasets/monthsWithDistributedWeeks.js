// @flow

const may = [
  [
    null,
    null,
    new Date('2019-05-01T00:00:00.000Z'),
    new Date('2019-05-02T00:00:00.000Z'),
    new Date('2019-05-03T00:00:00.000Z'),
    new Date('2019-05-04T00:00:00.000Z'),
    new Date('2019-05-05T00:00:00.000Z'),
  ],
  [
    new Date('2019-05-06T00:00:00.000Z'),
    new Date('2019-05-07T00:00:00.000Z'),
    new Date('2019-05-08T00:00:00.000Z'),
    new Date('2019-05-09T00:00:00.000Z'),
    new Date('2019-05-10T00:00:00.000Z'),
    new Date('2019-05-11T00:00:00.000Z'),
    new Date('2019-05-12T00:00:00.000Z'),
  ],
  [
    new Date('2019-05-13T00:00:00.000Z'),
    new Date('2019-05-14T00:00:00.000Z'),
    new Date('2019-05-15T00:00:00.000Z'),
    new Date('2019-05-16T00:00:00.000Z'),
    new Date('2019-05-17T00:00:00.000Z'),
    new Date('2019-05-18T00:00:00.000Z'),
    new Date('2019-05-19T00:00:00.000Z'),
  ],
  [
    new Date('2019-05-20T00:00:00.000Z'),
    new Date('2019-05-21T00:00:00.000Z'),
    new Date('2019-05-22T00:00:00.000Z'),
    new Date('2019-05-23T00:00:00.000Z'),
    new Date('2019-05-24T00:00:00.000Z'),
    new Date('2019-05-25T00:00:00.000Z'),
    new Date('2019-05-26T00:00:00.000Z'),
  ],
  [
    new Date('2019-05-27T00:00:00.000Z'),
    new Date('2019-05-28T00:00:00.000Z'),
    new Date('2019-05-29T00:00:00.000Z'),
    new Date('2019-05-30T00:00:00.000Z'),
    new Date('2019-05-31T00:00:00.000Z'),
    null,
    null,
  ],
];

const june = [
  [
    null,
    null,
    null,
    null,
    null,
    new Date('2019-06-01T00:00:00.000Z'),
    new Date('2019-06-02T00:00:00.000Z'),
  ],
  [
    new Date('2019-06-03T00:00:00.000Z'),
    new Date('2019-06-04T00:00:00.000Z'),
    new Date('2019-06-05T00:00:00.000Z'),
    new Date('2019-06-06T00:00:00.000Z'),
    new Date('2019-06-07T00:00:00.000Z'),
    new Date('2019-06-08T00:00:00.000Z'),
    new Date('2019-06-09T00:00:00.000Z'),
  ],
  [
    new Date('2019-06-10T00:00:00.000Z'),
    new Date('2019-06-11T00:00:00.000Z'),
    new Date('2019-06-12T00:00:00.000Z'),
    new Date('2019-06-13T00:00:00.000Z'),
    new Date('2019-06-14T00:00:00.000Z'),
    new Date('2019-06-15T00:00:00.000Z'),
    new Date('2019-06-16T00:00:00.000Z'),
  ],
  [
    new Date('2019-06-17T00:00:00.000Z'),
    new Date('2019-06-18T00:00:00.000Z'),
    new Date('2019-06-19T00:00:00.000Z'),
    new Date('2019-06-20T00:00:00.000Z'),
    new Date('2019-06-21T00:00:00.000Z'),
    new Date('2019-06-22T00:00:00.000Z'),
    new Date('2019-06-23T00:00:00.000Z'),
  ],
  [
    new Date('2019-06-24T00:00:00.000Z'),
    new Date('2019-06-25T00:00:00.000Z'),
    new Date('2019-06-26T00:00:00.000Z'),
    new Date('2019-06-27T00:00:00.000Z'),
    new Date('2019-06-28T00:00:00.000Z'),
    new Date('2019-06-29T00:00:00.000Z'),
    new Date('2019-06-30T00:00:00.000Z'),
  ],
];

const july = [
  [
    new Date('2019-07-01T00:00:00.000Z'),
    new Date('2019-07-02T00:00:00.000Z'),
    new Date('2019-07-03T00:00:00.000Z'),
    new Date('2019-07-04T00:00:00.000Z'),
    new Date('2019-07-05T00:00:00.000Z'),
    new Date('2019-07-06T00:00:00.000Z'),
    new Date('2019-07-07T00:00:00.000Z'),
  ],
  [
    new Date('2019-07-08T00:00:00.000Z'),
    new Date('2019-07-09T00:00:00.000Z'),
    new Date('2019-07-10T00:00:00.000Z'),
    new Date('2019-07-11T00:00:00.000Z'),
    new Date('2019-07-12T00:00:00.000Z'),
    new Date('2019-07-13T00:00:00.000Z'),
    new Date('2019-07-14T00:00:00.000Z'),
  ],
  [
    new Date('2019-07-15T00:00:00.000Z'),
    new Date('2019-07-16T00:00:00.000Z'),
    new Date('2019-07-17T00:00:00.000Z'),
    new Date('2019-07-18T00:00:00.000Z'),
    new Date('2019-07-19T00:00:00.000Z'),
    new Date('2019-07-20T00:00:00.000Z'),
    new Date('2019-07-21T00:00:00.000Z'),
  ],
  [
    new Date('2019-07-22T00:00:00.000Z'),
    new Date('2019-07-23T00:00:00.000Z'),
    new Date('2019-07-24T00:00:00.000Z'),
    new Date('2019-07-25T00:00:00.000Z'),
    new Date('2019-07-26T00:00:00.000Z'),
    new Date('2019-07-27T00:00:00.000Z'),
    new Date('2019-07-28T00:00:00.000Z'),
  ],
  [
    new Date('2019-07-29T00:00:00.000Z'),
    new Date('2019-07-30T00:00:00.000Z'),
    new Date('2019-07-31T00:00:00.000Z'),
    null,
    null,
    null,
    null,
  ],
];

export { may, june, july };
