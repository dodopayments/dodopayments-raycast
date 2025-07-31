/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - Your Dodo Payments API key */
  apiKey: string;
  /** API Mode - Select the API environment */
  apiMode: "test" | "live";
};

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences;

declare namespace Preferences {
  /** Preferences accessible in the `view-payments` command */
  export type ViewPayments = ExtensionPreferences & {};
  /** Preferences accessible in the `view-subscriptions` command */
  export type ViewSubscriptions = ExtensionPreferences & {};
  /** Preferences accessible in the `view-customers` command */
  export type ViewCustomers = ExtensionPreferences & {};
  /** Preferences accessible in the `view-products` command */
  export type ViewProducts = ExtensionPreferences & {};
  /** Preferences accessible in the `view-discounts` command */
  export type ViewDiscounts = ExtensionPreferences & {};
  /** Preferences accessible in the `view-license-keys` command */
  export type ViewLicenseKeys = ExtensionPreferences & {};
  /** Preferences accessible in the `view-disputes` command */
  export type ViewDisputes = ExtensionPreferences & {};
  /** Preferences accessible in the `view-refunds` command */
  export type ViewRefunds = ExtensionPreferences & {};
  /** Preferences accessible in the `view-payouts` command */
  export type ViewPayouts = ExtensionPreferences & {};
}

declare namespace Arguments {
  /** Arguments passed to the `view-payments` command */
  export type ViewPayments = {};
  /** Arguments passed to the `view-subscriptions` command */
  export type ViewSubscriptions = {};
  /** Arguments passed to the `view-customers` command */
  export type ViewCustomers = {};
  /** Arguments passed to the `view-products` command */
  export type ViewProducts = {};
  /** Arguments passed to the `view-discounts` command */
  export type ViewDiscounts = {};
  /** Arguments passed to the `view-license-keys` command */
  export type ViewLicenseKeys = {};
  /** Arguments passed to the `view-disputes` command */
  export type ViewDisputes = {};
  /** Arguments passed to the `view-refunds` command */
  export type ViewRefunds = {};
  /** Arguments passed to the `view-payouts` command */
  export type ViewPayouts = {};
}
