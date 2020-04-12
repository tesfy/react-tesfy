<p align="center">
  <img alt="logo" src="/assets/react_logo.png" width="280">
</p>

<p align="center">
  A lightweight A/B Testing and Feature Flag React library focused on performance ⚡️
</p>

<p align="center">
  <img alt="license" src="https://img.shields.io/badge/license-MIT-blue.svg">
  <img alt="tests status" src="https://github.com/andresz1/testfy/workflows/main/badge.svg">
</p>

[Testfy](https://github.com/andresz1/testfy) provides a simple but complete solution to develop A/B Tests and Feature Flags on both server and client side without relying in any storage layer. The main features of this library are:
- Lightweight and focused on performance
- Experiments
- Feature Flags
- Audience definition using [jsonLogic](http://jsonlogic.com/)
- Traffic Allocation
- Sticky Bucketing


## Usage

### Installation
```ts
npm install react-testfy --save
```

### Initialization
Render the provider with a datafile. A datafile is a `json` that defines the experiments and features avaliable. Ideally this file should be hosted somewhere outside your application (for example in [S3](https://aws.amazon.com/s3/)), so it could be fetched during boostrap or every certain time. This will allow you to make changes to the file without deploying the application.

```jsx
import { TestfyProvider } from 'react-testfy';

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
  <TestfyProvider datafile={datafile} userId={userId}>
    {children}
  </TestfyProvider>
);
```

### Experiments
Check which variation of an experiment is assigned to a user.

#### Hook
```jsx
import { useExperiment } from 'react-testfy';

const Test = () => {
  const variationId = useExperiment({ id: 'experiment-1' }); // '1'
};
```

#### Component
```jsx
import { Experiment, Variation } from 'react-testfy';

const Test = () => (
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

#### Hook
```jsx
import { useFeature } from 'react-testfy';

const Test = () => {
  const isEnabled = useFeature({ id: 'feature-1' }); // true
};
```

#### Component
```jsx
import { Feature } from 'react-testfy';

const Test = () => (
  <Feature id="feature-1">
    {isEnabled => isEnabled ? 'enabled' : 'disabled'}
  </Feature>
);
```

### Audiences
Use attributes to target an specific audience.


#### Hook
```jsx
import { useExperiment } from 'react-testfy';

const Test = () => {
  const id = 'experiment-2';
  const variationId1 = useExperiment({ id, attributes: { countryCode: 've' } }); // null
  const variationId2 = useExperiment({ id, attributes: { countryCode: 'us' } }); // '0'
};
```

#### Component
```jsx
const Test = () => (
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
