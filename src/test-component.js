/****************
 *   TEMPLATE   *
 ****************/

const testComponentTemplate = `
  <div class="test-component">
    <h2 class="test-component__value" ng-show="!ctrl.error && ctrl.percentage">
      The percentage is {{ ctrl.percentage }}
    </h2>
    <h4 class="test-component__error" ng-show="ctrl.error">
      {{ ctrl.error }}
    </h4>
  </div>
`;

/****************
 *  CONTROLLER  *
 ****************/

export class TestComponentController {
  constructor() {
    this.error = null;
    this.percentage = null;
  }

  /**
   * Validate on component changes.
   *
   * @param {Object} Attributes changed.
   */
  $onChanges({ model }) {
    this.validate(model.currentValue);
  }

  /**
   * Validate wheter the component got a valid number
   * and show an error if it hasn't.
   *
   * @param {Number?} Value to evaluate.
   */
  validate(value) {
    // Input is empty
    if (value === null) {
      this.error = null;
      this.percentage = null;
      return;
    }

    // Input got a non-numeric value
    if (value === undefined || typeof value !== "number") {
      this.error = "Invalid value. The input must be a number.";
      this.percentage = null;
      return;
    }

    // Not in range
    if (value < 0 || value > 1) {
      this.error = "Invalid value. The input must be between 0 and 1.";
      this.percentage = null;
      return;
    }

    // All ok, get the percentage
    this.error = null;
    this.percentage = `${(value * 100).toFixed(2)}%`;
  }
}

/****************
 *  COMPONENT   *
 ****************/

export default {
  template: testComponentTemplate,
  bindings: {
    model: "<"
  },
  controllerAs: "ctrl",
  controller: TestComponentController
};
