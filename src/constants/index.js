export const FACTORY_ADDRESS = '0xBCfCcbde45cE874adCB698cC183deBcF17952812'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://gist.githubusercontent.com/chefkebab/d6ba9475fc82e737296b62266e735d8b/raw/7b23995e1353e8797914567d960a6cabef0129f0/tokenlist.json',
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xe40fc6ff5f2895b44268fd2e1a421e07f567e007',
  '0xfd158609228b43aa380140b46fff3cdf9ad315de',
  '0xc00af6212fcf0e6fd3143e692ccd4191dc308bea',
  '0x205969b3ad459f7eba0dee07231a6357183d3fb6',
  '0x0bd67d358636fd7b0597724aa4f20beedbf3073a',
  '0xedf5d2a561e8a3cb5a846fbce24d2ccd88f50075',
  '0x702b0789a3d4dade1688a0c8b7d944e5ba80fc30',
  '0x041929a760d7049edaef0db246fa76ec975e90cc',
  '0xba098df8c6409669f5e6ec971ac02cd5982ac108',
  '0x1bbed115afe9e8d6e9255f18ef10d43ce6608d94',
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']
