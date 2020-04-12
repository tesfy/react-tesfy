import useTestfy from './useTestfy';

interface Props {
  id: string;
  userId?: string;
  attributes?: Record<string, any>;
}

const useFeature = ({ id, userId, attributes }: Props) => {
  const { engine } = useTestfy();

  return engine?.isFeatureEnabled(id, userId, attributes);
};

export default useFeature;
