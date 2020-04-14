<p align="center">
  <img alt="logo" src="/assets/react_logo.png" width="280">
</p>

<p align="center">
  A lightweight A/B Testing and Feature Flag React library focused on performance ⚡️
</p>

<p align="center">
  <img alt="license badge" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="tests badge" src="https://github.com/andresz1/tesfy/workflows/main/badge.svg">
  <img alt="size badge" src="https://badgen.net/bundlephobia/minzip/react-tesfy">
</p>

[Tesfy](https://github.com/andresz1/tesfy) provides a simple but complete solution to develop A/B Tests and Feature Flags on both server and client side without relying in any storage layer. The main features of this library are:
- Lightweight and focused on performance
- Experiments
- Feature Flags
- Audience definition using [jsonLogic](http://jsonlogic.com/)
- Traffic Allocation
- Sticky Bucketing


## Usage

### Installation
```ts
npm install react-tesfy --save
```

### Initialization
Render the provider with a datafile. A datafile is a `json` that defines the experiments and features avaliable. Ideally this file should be hosted somewhere outside your application (for example in [S3](https://aws.amazon.com/s3/)), so it could be fetched during boostrap or every certain time. This will allow you to make changes to the file without deploying the application.

```jsx
import { TesfyProvider } from 'react-tesfy';

const datafile = {
  experiments: {
    'experiment-1': {
      id: 'experiment-1',
      percentage: 90,
      variations: [{
        id: '0',
        percentage: 50
      }, {
        id: '1',
        percentage: 50
      }]
    },
    'experiment-2': {
      id: 'experiment-2',
      percentage: 100,
      variations: [{
        id: '0',
        percentage: 100
      }],
      audience: {
        '==' : [{ var : 'countryCode' }, 'us']
      }
    }
  },
  features: {
    'feature-1': {
      id: 'feature-1',
      percentage: 50
    }
  }
};
const userId = '676380e0-7793-44d6-9189-eb5868e17a86';

const App = () => (
  <TesfyProvider  datafile={datafile} userId={userId}>
    {children}
  </TesfyProvider >
);
```

### Experiments
Check which variation of an experiment is assigned to a user.

```jsx
import { useExperiment, Experiment, Variation } from 'react-tesfy';

const Hook = () => {
  const variationId = useExperiment({ id: 'experiment-1' }); // '1'
};

const Simple = () => (
  <Experiment id="experiment-1">
    <Variation>
      Not rendered
    </Variation>
    <Variation id="0">
      Not rendered
    </Variation>
    <Variation id="1">
      Rendered
    </Variation>
  </Experiment>
);
```

### Feature Flags
Check if a feature is enabled for a user.

```jsx
import { Feature } from 'react-tesfy';

const Hook = () => {
  const isEnabled = useFeature({ id: 'feature-1' }); // true
};

const Simple = () => (
  <Feature id="feature-1">
    {isEnabled => isEnabled ? 'enabled' : 'disabled'}
  </Feature>
);
```

### Audiences
Use attributes to target an specific audience.

```jsx
import { useExperiment, Experiment, Variation } from 'react-tesfy';

const Hook = () => {
  const id = 'experiment-2';
  const variationId1 = useExperiment({ id, attributes: { countryCode: 've' } }); // null
  const variationId2 = useExperiment({ id, attributes: { countryCode: 'us' } }); // '0'
};

const Simple = () => (
  <Fragment>
    <Experiment id="experiment-2" attributes={{ countryCode: 've' }}>
      <Variation>
        Rendered
      </Variation>
      <Variation id="0">
        Not rendered
      </Variation>
    </Experiment>
    
    <Experiment id="experiment-2" attributes={{ countryCode: 'us' }}>
      <Variation>
        Not endered
      </Variation>
      <Variation id="0">
        Rendered
      </Variation>
    </Experiment>
  </Fragment>
);
```

## Feedback

Pull requests, feature ideas and bug reports are very welcome. We highly appreciate any feedback.
