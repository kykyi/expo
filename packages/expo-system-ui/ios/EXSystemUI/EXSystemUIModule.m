// Copyright 2018-present 650 Industries. All rights reserved.

#import <EXSystemUI/EXSystemUIModule.h>

@interface EXSystemUIModule ()

@property (nonatomic, weak) UMModuleRegistry *moduleRegistry;

@end

@implementation EXSystemUIModule

UM_EXPORT_MODULE(ExpoSystemUI);

- (void)setModuleRegistry:(UMModuleRegistry *)moduleRegistry
{
  _moduleRegistry = moduleRegistry;
}

UM_EXPORT_METHOD_AS(someGreatMethodAsync,
                    options:(NSDictionary *)options
                    resolve:(UMPromiseResolveBlock)resolve
                    reject:(UMPromiseRejectBlock)reject)
{
}

@end
