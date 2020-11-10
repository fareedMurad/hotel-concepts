/**
 * modal state
 */
class ModalState {
  /**
   * Active modals
   */
  public active: any[] = [];
  /**
   * Contributor Id
   */
  public contributorId: string = null;
  /*
   *  Book overview modal
   */
  public bookOverviewModal: boolean = false;
  /*
   *  Book preview modal
   */
  public readBookUrl: string = '';
}

export { ModalState };
