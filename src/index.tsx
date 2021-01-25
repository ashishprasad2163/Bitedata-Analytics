import { NativeModules } from 'react-native';

type BitedataAnalyticsType = {
  multiply(a: number, b: number): Promise<number>;
};

const { BitedataAnalytics } = NativeModules;

export default BitedataAnalytics as BitedataAnalyticsType;
