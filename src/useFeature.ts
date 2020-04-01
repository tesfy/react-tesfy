import useTestfy from './useTestfy';

interface Props {
  featureId: string;
  userId?: string;
  attributes?: Record<string, any>;
}

const useFeature = ({ featureId, userId, attributes }: Props) => {
  const { instance: testfy } = useTestfy();

  return testfy?.isFeatureEnabled(featureId, userId, attributes);
};

export default useFeature;
