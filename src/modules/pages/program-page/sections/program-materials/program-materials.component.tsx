import * as React from 'react';
import { ProgramMaterialsProps } from './program-materials.props';
import * as styles from './program-materials.scss';

/**
 * Renders ProgramMaterials
 */
const ProgramMaterials: React.FC<ProgramMaterialsProps> = ({}) => {
  const data = [
    "Marketing analysis of the market. Review of best practices",
    "How to calculate brand equity",
    "Market and consumer analysis. Examples",
    "Positioning checklist",
    "5 examples of good and bad positioning"
  ];
  return (
    <section className={styles.programMaterials}>
      <div className={styles.title}>
        Additional materials
      </div>
      {data.map((item, index) => (
        <div className={styles.item} key={index}>{item}</div>
      ))}
    </section>
  );
};

export { ProgramMaterials };
