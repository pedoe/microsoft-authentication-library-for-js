import { expect } from "chai";
import { AccessTokenEntity } from "../../../src/cache/entities/AccessTokenEntity";
import { mockCache } from "./cacheConstants";
import { ClientAuthError, ClientAuthErrorMessage } from "../../../src";
import { CacheType } from "../../../src/utils/Constants";

describe("AccessTokenEntity.ts Unit Tests", () => {

    it("Verify an AccessTokenEntity entity", () => {
        const at = new AccessTokenEntity();
        expect(at instanceof AccessTokenEntity);
    });

    it("Generate AccessTokenEntity key", () => {
        const at = mockCache.createMockATOne();
        expect(at.generateCredentialKey()).to.eql(
            "uid.utid-login.microsoftonline.com-accesstoken-mock_client_id-microsoft-scope1 scope2 scope3"
        );
    });

    it("Throws error if AccessTokenEntity is not assigned a type", () => {
        const at = new AccessTokenEntity();
        expect(() => at.generateType()).to.throw(ClientAuthError);
        expect(() => at.generateType()).to.throw(ClientAuthErrorMessage.unexpectedCredentialType.desc);
    });

    it("Generate AccessTokenEntity type", () => {
        const at = mockCache.createMockATOne();
        expect(at.generateType()).to.eql(CacheType.ACCESS_TOKEN);
    });
});
