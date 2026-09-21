# Vesta website & store release checklist

This checklist maps the current app behavior to the public disclosures. It is a release aid, not legal advice.

## Required publisher details

Update `dist/site-config.js` with:

- the exact legal entity or individual name shown in App Store Connect and Play Console;
- a monitored privacy email;
- a monitored support email; and
- a public postal address appropriate for the publisher's jurisdiction.

Have qualified counsel review the governing-law clause, age threshold, consumer terms, and international-transfer mechanism before launch.

## Apple App Store Connect

- Privacy Policy URL: `/privacy/`
- User Privacy Choices URL: `/privacy-choices/`
- Terms URL: `/terms/`
- Declare all data collected by the app and its providers. Based on the current code, review at least: Photos or Videos, Purchases, User Content, Product Interaction/Other Usage Data, and Identifiers used for job/credit handling.
- Confirm whether each type is linked to identity. The current client has no account, but the production backend design may add a user or device identifier.
- Confirm that no data is used for tracking. The current dependency list includes no advertising or analytics SDK.
- Add working Privacy and Terms links inside the app; the current Settings rows are not wired to URLs.
- Verify the production deletion flow. The current UI shows a demo message and clears only the active draft; it does not yet call `/v1/accounts/delete` or clear every local wardrobe record.
- Confirm a production purchase verifier. The backend currently returns `STORE_VERIFIER_NOT_CONFIGURED` outside mock mode.

## Google Play Console

- Privacy policy URL: `/privacy/` (public, stable, non-PDF, non-geofenced).
- Complete Data safety using the production build and every third-party provider/SDK, not only the Flutter client.
- Keep Data safety answers consistent with the policy and actual retention.
- If account creation is added, provide both an in-app deletion path and the external `/privacy-choices/` path.
- Provide a prominent in-app explanation immediately before camera/photo access and AI processing when required.

## Product/privacy engineering before production

- Make `ALLOW_PROVIDER_PICKER=false` and disclose the actual production AI provider(s).
- Enforce HTTPS and validate server authentication and per-user authorization; the backend currently defaults to `demo-user` when `x-user-id` is absent.
- Make the 24-hour cleanup operationally reliable, including provider-side retention and backups, then verify it in production.
- Decide and document retention for job metadata, credit ledgers, security logs, purchase verification, and backups.
- Sign data-processing agreements and, for EU transfers, appropriate transfer safeguards with every processor.
- Add a processor/subprocessor list or update mechanism if the vendor set changes.
- Confirm whether uploaded photos may include minors and configure provider consent/safety settings accordingly.
- Do not claim model-training exclusion until contracts and provider settings confirm it.
- Wire the in-app Privacy, Terms, Export, Help, and Delete controls to real flows.
- Re-review this policy whenever SDKs, analytics, ads, authentication, providers, retention, or sharing changes.

## Public content QA

- Replace all `.example` emails and remove the visible draft notice.
- Test `/`, `/privacy/`, `/terms/`, and `/privacy-choices/` at mobile and desktop sizes.
- Confirm all store badges point to live listings only after publication.
- Recheck policy effective date, publisher identity, and contacts in every locale.
