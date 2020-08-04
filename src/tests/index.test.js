import { UserRole } from '../index';

describe('User role:', () => {
    const roles = ['role1', 'role2', 'role3'];
    const roleIndex = 1;
    const currentRole = roles[roleIndex];
    const children = ['child1', 'child2', 'child3'];

    test('Should return null if currentRole is not exist in roles', () => {
        expect(UserRole({roles, currentRole: 'role999', children})).toBe(null)
    })

    test('Should return null if children has no roleIndex', () => {
        expect(UserRole({roles, currentRole, children: []})).toBe(null)
    })

    test('Should return correct role', () => {
        expect(UserRole({roles, currentRole, children})).toBe(children[roleIndex])
    })
})
