export type WebUserSettingType = {
  desktop: {
    hasClosedFeedbackPromotion: boolean,
    hasSeenProductTour: boolean,
    isAccountSummaryOpened: boolean,
    hasClosedInvitationPromotion: boolean,
    accountSummaryPosition: string,
  },
  mobile: {
    hasSeenProductTour: boolean,
  },
}