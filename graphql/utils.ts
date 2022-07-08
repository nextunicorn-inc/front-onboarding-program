import { Maybe } from './types';

/*
 * 현재 gql-alpha에서 필드의 Nullable한 성질이 제대로 정해지지 않았습니다.
 * 이에, 임의로 Nullable한 값을 조정할 수 있는 유틸 타입을 만들었습니다.
 * 이 유틸 파일이 모든 테스트 커버리지를 거치지는 않았지만, 현재 리스트를 리턴하는 GQL 쿼리로 테스트 한 결과 제대로 반영이 되는 것을 확인했습니다.
 * 문제가 생기면 언제든지 말씀 주세요. 감사합니다.
 *
 * T: GraphQL Query
 * PreservedKeys: null을 유지해야 하는 키의 union
 * */

export type RecursivelyExcludeNull<T, PreservedKeys = never> = T extends Maybe<infer U>
  ? U extends Array<infer Elem>
    ? Elem extends null
      ? never
      : Elem extends Maybe<infer ElemVal>
      ? RecursivelyExcludeNull<ElemVal, PreservedKeys>[]
      : RecursivelyExcludeNull<Elem, PreservedKeys>[]
    : U extends object
    ? {
        [Key in keyof U]: Key extends PreservedKeys
          ? U[Key]
          : U[Key] extends Maybe<infer Property>
          ? RecursivelyExcludeNull<Property, PreservedKeys>
          : RecursivelyExcludeNull<U[Key], PreservedKeys>;
      }
    : U
  : T;
