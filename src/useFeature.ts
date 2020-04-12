import useTestfy from './useTestfy';

interface Props {
  featureId: string;
  userId?: string;
  attributes?: Record<string, any>;
}

const useFeature = ({ featureId, userId, attributes }: Props) => {
  const { engine } = useTestfy();

  return engine?.isFeatureEnabled(featureId, userId, attributes);
};

export default useFeature;
