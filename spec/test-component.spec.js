import angular from "angular";
import "angular-mocks";
import TestComponent, { TestComponentController } from "../src/test-component";
import "../src/app";

describe("TestComponent", () => {
  /****************
   *   VALIDATE   *
   ****************/

  describe("Validate method", () => {
    it("should add the correct percentage when the input model has a correct value", () => {
      const controller = new TestComponentController();
      controller.validate(0.42);

      expect(controller.error).toBe(null);
      expect(controller.percentage).toBe("42.00%");
    });

    it("should fix the percentage to two decimal places", () => {
      const controller = new TestComponentController();
      controller.validate(0.42424242);

      expect(controller.error).toBe(null);
      expect(controller.percentage).toBe("42.42%");
    });

    it("should keep error and percentage null if input model is null", () => {
      const controller = new TestComponentController();
      controller.validate(null);

      expect(controller.error).toBe(null);
      expect(controller.percentage).toBe(null);
    });

    it("should add an error if input model is undefined", () => {
      const controller = new TestComponentController();
      controller.validate(undefined);

      expect(controller.error).toBe(
        "Invalid value. The input must be a number."
      );
      expect(controller.percentage).toBe(null);
    });

    it("should add an error if input model is not a number", () => {
      const controller = new TestComponentController();
      controller.validate("test");

      expect(controller.error).toBe(
        "Invalid value. The input must be a number."
      );
      expect(controller.percentage).toBe(null);
    });

    it("should add an error if input model is lower than 0", () => {
      const controller = new TestComponentController();
      controller.validate(-0.1);

      expect(controller.error).toBe(
        "Invalid value. The input must be between 0 and 1."
      );
      expect(controller.percentage).toBe(null);
    });

    it("should add an error if input model is greater than 1", () => {
      const controller = new TestComponentController();
      controller.validate(1.1);

      expect(controller.error).toBe(
        "Invalid value. The input must be between 0 and 1."
      );
      expect(controller.percentage).toBe(null);
    });
  });

  /****************
   *    RENDER    *
   ****************/

  describe("Render", () => {
    let $compile, $rootScope;

    beforeEach(() => {
      angular.mock.module("app");
      inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      });
    });

    it("should show a percentage", () => {
      const template = '<test-component model=".42"></test-component>';
      const element = $compile(template)($rootScope);
      $rootScope.$digest();
      const html = element.html();

      expect(html).toContain("The percentage is 42.00%");
    });

    it("should show a fixed percentage", () => {
      const template = '<test-component model=".4242424242"></test-component>';
      const element = $compile(template)($rootScope);
      $rootScope.$digest();
      const html = element.html();

      expect(html).toContain("The percentage is 42.42%");
    });

    it("should show an error when input isn't in range", () => {
      const template = '<test-component model="42"></test-component>';
      const element = $compile(template)($rootScope);
      $rootScope.$digest();
      const html = element.html();

      expect(html).toContain(
        "Invalid value. The input must be between 0 and 1."
      );
    });
  });
});
