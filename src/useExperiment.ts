import useTesfy from './useTesfy';

interface Props {
  id: string;
  userId?: string;
  attributes?: Record<string, any>;
}

const useExperiment = ({ id, userId, attributes }: Props) => {
  const { engine } = useTesfy();

  return engine?.getVariationId(id, userId, attributes);
};

export default useExperiment;
