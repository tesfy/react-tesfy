import useTestfy from './useTestfy';

interface Props {
  id: string;
  userId?: string;
  attributes?: Record<string, any>;
}

const useExperiment = ({ id, userId, attributes }: Props) => {
  const { instance: testfy } = useTestfy();

  return testfy?.getVariationId(id, userId, attributes);
};

export default useExperiment;
