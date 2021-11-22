/*
Language: TTCN3
Author: Kamil Łuczak
Description: Language definition for ttcn3 files
*/

module.exports = function(hljs) {
    // keywords from https://www.xsharp.eu/help/keywords.html
    const NORMAL_KEYWORDS = ['alt', 'break', 'case', 'continue', 'do', 'else', 'for', 'goto', 'if', 'interleave', 'label', 'repeat', 'return', 'select', 'while', 'all', 'any', 'from', 'complement', 'decmatch', 'pattern', 'permutation', 'present', 'subset', 'superset', 'value', 'char', 'except', 'exception', 'ifpresent', 'language', 'mixed', 'nowait', 'recursive', 'sender', 'to'];
  
    const TYPES = [
      'address', 'anytype', 'bitstring', 'boolean', 'charstring', 'component', 'default', 'enumerated', 'float', 'hexstring', 'integer', 'message', 'octetstring', 'port', 'procedure', 'record\s+of', 'record', 'set\s+of', 'set', 'timer', 'union', 'universal', 'verdicttype',
    ];
  
    const LITERALS = [
      'error', 'fail', 'false', 'inconc', 'infinity', '-infinity', 'none', 'not_a_number', 'null', 'pass', 'true', 'omit'
    ];

    const BUILT_IN = [
      'action', 'activate', 'call', 'catch', 'check', 'connect', 'create', 'deactivate', 'disconnect', 'execute', 'getcall', 'getreply', 'log', 'map', 'match', 'raise', 'receive', 'reply', 'send', 'setencode', 'setverdict', 'start', 'trigger', 'unmap', 'valueof', 'any2unistr', 'bit2hex', 'bit2int', 'bit2oct', 'bit2str', 'char2int', 'char2oct', 'decvalue', 'decvalue_o', 'decvalue_unichar', 'encvalue', 'encvalue_o', 'encvalue_unichar', 'enum2int', 'float2int', 'get_stringencoding', 'hex2bit', 'hex2int', 'hex2oct', 'hex2str', 'hostid', 'int2bit', 'int2char', 'int2enum', 'int2float', 'int2hex', 'int2oct', 'int2str', 'int2unichar', 'istemplatekind', 'lengthof', 'oct2bit', 'oct2char', 'oct2hex', 'oct2int', 'oct2str', 'oct2unichar', 'regexp', 'remove_bom', 'replace', 'rnd', 'sizeof', 'str2float', 'str2hex', 'str2int', 'str2oct', 'substr', 'testcasename', 'unichar2int', 'unichar2octalive', 'clear', 'done', 'getverdict', 'halt', 'kill', 'killed', 'read', 'running', 'stop', 'timeout'
    ];

    const KEYWORDS = {
      keyword: NORMAL_KEYWORDS,
      type: TYPES,
      literal: LITERALS,
      built_in: BUILT_IN
    };
  
    return {
      name: "ttcn3",
      case_insensitive: true,
      keywords: KEYWORDS,
      contains: [
        hljs.COMMENT('//', {
          contains: [
            {
              scope: 'doc',
              begin: /\\\n/
            }
          ]
        }),
        hljs.COMMENT(
          '/\\*', // begin
          '\\*/', // end
          {
            contains: [
              {
                scope: 'doc', begin: '@\\w+'
              }
            ]
          }
        )
      ]
    };
  };